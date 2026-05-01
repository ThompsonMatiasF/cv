import { beforeEach, describe, expect, it, vi } from 'vitest'
import html2canvas from 'html2canvas'
import { downloadResumeAsPdf } from './downloadPdf'

vi.mock('html2canvas', () => ({
  default: vi.fn(),
}))

const addImageMock = vi.fn()
const saveMock = vi.fn()
const jsPDFSpy = vi.fn()

vi.mock('jspdf', () => {
  return {
    default: class {
      constructor(...args: unknown[]) {
        jsPDFSpy(...args)
      }
      addImage = addImageMock
      save = saveMock
    },
  }
})

describe('downloadResumeAsPdf', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    document.body.innerHTML = ''
  })

  it('should throw an error when the element does not exist', async () => {
    await expect(downloadResumeAsPdf('missing-element')).rejects.toThrow(
      'Element with id "missing-element" not found'
    )

    expect(html2canvas).not.toHaveBeenCalled()
  })

  it('should generate and save a PDF using the default file name', async () => {
    const element = document.createElement('div')
    element.id = 'resume-container'
    document.body.appendChild(element)

    const toDataURLMock = vi.fn(() => 'data:image/png;base64,test-image')

    vi.mocked(html2canvas).mockResolvedValue({
      width: 1000,
      height: 2000,
      toDataURL: toDataURLMock,
    } as unknown as HTMLCanvasElement)

    await downloadResumeAsPdf('resume-container')

    expect(html2canvas).toHaveBeenCalledWith(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    })

    expect(jsPDFSpy).toHaveBeenCalledWith({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    expect(toDataURLMock).toHaveBeenCalledWith('image/png')

    expect(addImageMock).toHaveBeenCalledWith(
      'data:image/png;base64,test-image',
      'PNG',
      0,
      0,
      210,
      420
    )

    expect(saveMock).toHaveBeenCalledWith('resume.pdf')
  })

  it('should save the PDF using a custom file name', async () => {
    const element = document.createElement('div')
    element.id = 'resume-container'
    document.body.appendChild(element)

    vi.mocked(html2canvas).mockResolvedValue({
      width: 1000,
      height: 1000,
      toDataURL: vi.fn(() => 'data:image/png;base64,test-image'),
    } as unknown as HTMLCanvasElement)

    await downloadResumeAsPdf('resume-container', 'Matias-Thompson-CV.pdf')

    expect(saveMock).toHaveBeenCalledWith('Matias-Thompson-CV.pdf')
  })
})
