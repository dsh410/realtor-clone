import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link, redirect } from 'react-router-dom';
import { HOME_PATH, SIGN_IN_PATH } from '../constants';

export default function ForgotPassword({ redirect }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
   e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log('sending reset password reset object', sendPasswordResetEmail);
      toast.success("Email was sent");   } catch (error) {
      toast.error("Could not send reset password");
    }
  };

  const handleBackToSignIn = (e) => {
    e.preventDefault();
    redirect(e,`${SIGN_IN_PATH}`); // Redirect to home or sign in page
    // Handle navigation to sign in page
  };

  const handleResendEmail = () => {
    setIsSubmitted(false);
    setIsLoading(true);
    
    // Simulate resend API call
    setTimeout(() => {
      console.log('Password reset email resent to:', email);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Check Your Email</h1>
            <p className="text-gray-700 mb-6">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                Didn't receive the email? Check your spam folder or click the button below to resend.
              </p>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Resend Email'
                )}
              </button>

              <button
                type="button"
                onClick={(e) => handleBackToSignIn(e)}
                className="w-full flex justify-center py-3 px-4 border-2 border-red-700 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-colors duration-200"
              >
                Back to Sign In
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                The reset link will expire in 24 hours for security reasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
          <p className="text-gray-700">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-gray-900"
                placeholder="Enter your email address"
                aria-describedby="email-description"
              />
              <p id="email-description" className="mt-1 text-xs text-gray-600">
                We'll send password reset instructions to this email address.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!email || isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Reset Link...
                </div>
              ) : (
                'Send Reset Link'
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleBackToSignIn}
                className="text-sm font-medium text-red-700 hover:text-red-800 underline focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
              >
                ← Back to Sign In
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-600">
                Remember your password?{' '}
                <button
                  type="button"
                  onClick={handleBackToSignIn}
                  className="font-medium text-red-700 hover:text-red-800 underline"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
