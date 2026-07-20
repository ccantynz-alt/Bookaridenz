import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

/**
 * Receives the admin token after Google sign-in on the shared platform.
 * The OAuth flow runs on bookaride.co.nz and redirects here with
 * #token=... (or ?error=...&message=...).
 */
export default function AdminAuthCallback() {
  const navigate = useNavigate()
  const hasProcessed = useRef(false)
  const [status, setStatus] = useState('processing')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (hasProcessed.current) return
    hasProcessed.current = true

    const params = new URLSearchParams(window.location.search)
    const errorType = params.get('error')
    if (errorType) {
      setStatus('error')
      const msg = params.get('message')
      setErrorMessage(msg ? msg.replace(/\+/g, ' ') : 'Sign-in failed. Please try again.')
      return
    }

    const tokenMatch = window.location.hash.match(/token=([^&]+)/)
    if (tokenMatch) {
      localStorage.setItem('admin_token', tokenMatch[1])
      setStatus('success')
      // Clear the token from the URL before navigating
      window.history.replaceState(null, '', window.location.pathname)
      setTimeout(() => navigate('/admin/dashboard', { replace: true }), 600)
    } else {
      setStatus('error')
      setErrorMessage('No sign-in token received. Please try again.')
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-sm w-full text-center">
        {status === 'processing' && (
          <>
            <Loader2 className="w-10 h-10 text-gold animate-spin mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Completing sign-in…</p>
          </>
        )}
        {status === 'success' && (
          <>
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <p className="text-gray-900 font-semibold">Signed in — opening dashboard…</p>
          </>
        )}
        {status === 'error' && (
          <>
            <XCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <p className="text-gray-900 font-semibold mb-2">Sign-in failed</p>
            <p className="text-gray-500 text-sm mb-6">{errorMessage}</p>
            <button
              onClick={() => navigate('/admin/login')}
              className="bg-gold hover:bg-gold-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}
