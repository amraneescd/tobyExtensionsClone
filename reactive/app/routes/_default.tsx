import { TheFooter } from '@/components/TheFooter'
import { Trans } from '@lingui/macro'

export function Component() {
  return (
    <main className="px-4 py-10 text-gray-700 dark:text-gray-200">
      <Outlet />
      <TheFooter />
      <div className="mx-auto mt-5 text-center text-sm opacity-50">
        <Trans>[Default Layout]</Trans>
      </div>
    </main>
  )
}
