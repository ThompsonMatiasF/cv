import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@ui/hooks/useTheme'
import { ThemeButton } from './ThemeButton'
import { downloadResumeAsPdf } from '@ui/actions/downloadResumeAsPdf'

interface DownloadButtonProps {
  fileName?: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileName = 'resume.pdf',
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      await downloadResumeAsPdf(fileName)
    } catch (error) {
      console.error('Error downloading PDF:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeButton onClick={handleDownload} title="Download PDF">
      <FontAwesomeIcon
        icon={isLoading ? faSpinner : faDownload}
        spin={isLoading}
        color={isLight ? '#666' : '#aaa'}
      />
    </ThemeButton>
  )
}
