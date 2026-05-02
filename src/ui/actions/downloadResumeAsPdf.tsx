import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { createRoot } from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'
import { Resume } from '@ui/views/Resume'
import { ThemeProvider } from '@ui/theme/ThemeProvider'

export const downloadResumeAsPdf = async (
  fileName: string = 'resume.pdf'
): Promise<void> => {
  const container = document.createElement('div')

  container.style.position = 'fixed'
  container.style.left = '-9999px'
  container.style.top = '0'
  container.style.zIndex = '-1'

  document.body.appendChild(container)

  const root = createRoot(container)

  await new Promise<void>((resolve) => {
    root.render(
      <StyleSheetManager target={container}>
        <ThemeProvider>
          <Resume onRender={resolve} variant="pdf" />
        </ThemeProvider>
      </StyleSheetManager>
    )
  })

  const canvas = await html2canvas(container, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    windowWidth: 1024,
  })

  root.unmount()
  document.body.removeChild(container)

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const imgData = canvas.toDataURL('image/png')

  const pdfWidth = 210
  const pageHeight = 297
  const imgHeight = (canvas.height * pdfWidth) / canvas.width

  let heightLeft = imgHeight
  let position = 0

  pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
  heightLeft -= pageHeight

  while (heightLeft > 0) {
    position = heightLeft - imgHeight
    pdf.addPage()
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
    heightLeft -= pageHeight
  }

  pdf.save(fileName)
}
