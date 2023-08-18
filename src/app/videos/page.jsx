import { SimpleLayout } from '@/components/SimpleLayout'

export default function Videos(){
    return (
        <>
        <SimpleLayout
        title="Latest YouTube Videos"
        intro=""
      >
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="h-48 rounded-lg bg-gray-100"></div>
            <div class="h-48 rounded-lg bg-gray-100"></div>
            <div class="h-48 rounded-lg bg-gray-100"></div>
        </div>
      </SimpleLayout>

    </>
    )
}