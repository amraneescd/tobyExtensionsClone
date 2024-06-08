import viteLogo from '@/assets/vite.jpg?w=75&h=75&format=webp'
import { t } from '@lingui/macro'

export function Component() {
  return (
    <div>
      <div className="font-sans flex gap-4 justify-center m-4">
        <a
          href="https://vitejs.dev"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Vite logo"
            className="logo"
            src={viteLogo}
          />
        </a>
        <a
          href="https://github.com/ws-rush/reactive"
          rel="noreferrer"
          target="_blank"
        >
          <div className="text-5xl">
            <div className="i-carbon-chart-radar inline-block" />
          </div>
        </a>
      </div>
      <p>
        <a
          href="https://github.com/ws-rush/reactive"
          rel="noreferrer"
          target="_blank"
        >
          Reactive
        </a>
      </p>
      <p>
        <em className="text-sm opacity-75">{t`intro.desc`}</em>
      </p>

      <div className="py-4" />

      <label
        className="hidden"
        htmlFor="input"
      >{t`intro.whats-your-name`}</label>

      <div>
        <button
          className="m-3 text-sm btn"
          type="button"
        >
          {t`button.go`}
        </button>
      </div>
    </div>
  )
}
