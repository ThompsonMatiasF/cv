import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ReactNode } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { downloadResumeAsPdf } from './downloadResumeAsPdf'

vi.mock('html2canvas')

const addImageMock = vi.fn()
const addPageMock = vi.fn()
const saveMock = vi.fn()

vi.mock('jspdf', () => {
  const jsPDFMock = vi.fn().mockImplementation(function () {
    return {
      addImage: addImageMock,
      addPage: addPageMock,
      save: saveMock,
    }
  })

  return {
    default: jsPDFMock,
  }
})

const renderMock = vi.fn((node: ReactNode) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyNode = node as any
  const resume = anyNode?.props?.children?.props?.children
  if (resume?.props?.onRender) {
    resume.props.onRender()
  }
})

const unmountMock = vi.fn()

vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: renderMock,
    unmount: unmountMock,
  })),
}))

vi.mock('@ui/views/Resume', () => ({
  Resume: () => null,
}))

describe('downloadResumeAsPdf', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should generate and save a PDF with default filename', async () => {
    vi.mocked(html2canvas).mockResolvedValue({
      width: 1000,
      height: 2000,
      toDataURL: vi.fn(() => 'data:image/png;base64,test-image'),
    } as unknown as HTMLCanvasElement)

    await downloadResumeAsPdf()

    expect(html2canvas).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        windowWidth: 1024,
      })
    )

    expect(jsPDF).toHaveBeenCalledWith({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    expect(addImageMock).toHaveBeenCalled()
    expect(saveMock).toHaveBeenCalledWith('resume.pdf')
    expect(unmountMock).toHaveBeenCalled()
  })

  it('should save the PDF with custom filename', async () => {
    vi.mocked(html2canvas).mockResolvedValue({
      width: 1000,
      height: 1000,
      toDataURL: vi.fn(() => 'data:image/png;base64,test-image'),
    } as unknown as HTMLCanvasElement)

    await downloadResumeAsPdf('Matias-Thompson-CV.pdf')

    expect(saveMock).toHaveBeenCalledWith('Matias-Thompson-CV.pdf')
  })

  it('should add multiple pages when content exceeds one page', async () => {
    vi.mocked(html2canvas).mockResolvedValue({
      width: 1000,
      height: 4000,
      toDataURL: vi.fn(() => 'data:image/png;base64,test-image'),
    } as unknown as HTMLCanvasElement)

    await downloadResumeAsPdf()

    expect(addPageMock).toHaveBeenCalled()
    expect(addImageMock.mock.calls.length).toBeGreaterThanOrEqual(2)
  })
})
