import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const downloadResumeAsPdf = async (
  elementId: string,
  fileName: string = 'resume.pdf'
): Promise<void> => {
  const element = document.getElementById(elementId)

  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`)
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
  })

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const imgData = canvas.toDataURL('image/png')

  const pdfWidth = 210
  const imgHeight = (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight)

  pdf.save(fileName)
}
