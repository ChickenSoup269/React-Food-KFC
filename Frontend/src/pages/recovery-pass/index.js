import react from 'react'
import styles from './recovery-pass.scss'
import clsx from 'clsx'
import routes from '~/routes/routes'

const cx = clsx.bind(styles)

export default function RecoveryPassword() {
  return (
    <div className={cx('wrapper-forgot-pass')}>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
          <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
        </div>
        <div className="flex flex-col max-w-md w-full space-y-5">
          <input
            type="text"
            placeholder="Enter OTP"
            className="flex w-full px-4 py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <button className="flex items-center justify-center px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white hover:bg-gray-800 transition duration-200">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
