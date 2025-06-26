import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('email'); // 'email' | 'otp' | 'reset' | 'done'
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const timerRef = useRef(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate(); // ✅ Add navigate

  // Start timer when OTP is generated
  useEffect(() => {
    if (step === 'otp') {
      setTimer(60);
      timerRef.current = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [step]);

  // Simulate sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Simulate async delay
    setTimeout(() => {
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otpCode);
      alert(`Simulated OTP (for demo): ${otpCode}`);
      setStep('otp');
      setLoading(false);
    }, 800);
  };

  // Handle OTP submit
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (timer === 0) {
      setError('OTP expired. Please resend.');
      return;
    }
    if (otp === generatedOtp) {
      setStep('reset');
      setOtp('');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  // Handle password reset and redirect
  const handleResetPassword = (e) => {
    e.preventDefault();
    setPasswordError('');
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // Simulate password reset (replace with backend call if needed)
    setStep('done');

    // ✅ Redirect after 2 seconds
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  // Resend OTP
  const handleResendOtp = () => {
    setOtp('');
    setError('');
    handleSendOtp({ preventDefault: () => { } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9]">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-[#14b8a6]/10">
        <h1 className="text-3xl font-bold text-center text-[#0f172a] mb-6">Forgot Password</h1>

        {/* Step 1: Enter Email */}
        {step === 'email' && (
          <form onSubmit={handleSendOtp}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={loading}
              />
            </div>
            {error && <div className="text-red-600 text-center mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full bg-[#14b8a6] hover:bg-[#0f172a] text-white py-3 rounded-lg font-bold transition-all"
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        )}

        {/* Step 2: Enter OTP */}
        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4 text-center text-gray-700">
              Enter the 6-digit OTP sent to your email.
            </div>
            <div className="mb-4 flex items-center gap-2">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6] text-center tracking-widest text-lg"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter OTP"
                required
                disabled={loading || timer === 0}
              />
              <span className={`text-sm ${timer === 0 ? 'text-red-500' : 'text-gray-500'}`}>
                {timer > 0 ? `0:${timer.toString().padStart(2, '0')}` : 'Expired'}
              </span>
            </div>
            {error && <div className="text-red-600 text-center mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full bg-[#14b8a6] hover:bg-[#0f172a] text-white py-3 rounded-lg font-bold transition-all mb-2"
              disabled={loading || timer === 0}
            >
              Verify OTP
            </button>
            <button
              type="button"
              className="w-full text-[#14b8a6] underline text-sm"
              onClick={handleResendOtp}
              disabled={loading || timer > 0}
            >
              Resend OTP
            </button>
          </form>
        )}

        {/* Step 3: Reset Password */}
        {step === 'reset' && (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4 text-center text-gray-700">
              Enter your new password.
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="New password"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
              />
            </div>
            {passwordError && <div className="text-red-600 text-center mb-4">{passwordError}</div>}
            <button
              type="submit"
              className="w-full bg-[#14b8a6] hover:bg-[#0f172a] text-white py-3 rounded-lg font-bold transition-all"
            >
              Reset Password
            </button>
          </form>
        )}

        {/* Step 4: Success Message */}
        {step === 'done' && (
          <div className="text-center text-[#14b8a6] font-semibold">
            Your password has been reset successfully! Redirecting to login...
          </div>
        )}
      </div>
    </div>
  );
}
