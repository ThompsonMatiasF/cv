import React, { useState } from 'react'
import { downloadResumeAsPdf } from '@ui/actions/downloadPdf'
import { StyledButton } from './StyledButton'

interface DownloadButtonProps {
  elementId: string
  fileName?: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  elementId,
  fileName = 'resume.pdf',
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      await downloadResumeAsPdf(elementId, fileName)
    } catch (error) {
      console.error('Error downloading PDF:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <StyledButton onClick={handleDownload} disabled={isLoading}>
      {isLoading ? '⬇️ Descargando...' : '⬇️ Descargar PDF'}
    </StyledButton>
  )
}
