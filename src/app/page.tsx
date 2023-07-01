import FormComponent from "@/components/FormComponent"
import Heading from "@/components/Heading"
import ThemeSwitch from "@/components/ThemeSwitch"

export default function Home() {
  return (
    <>
      <ThemeSwitch className="fixed right-2 top-2" />
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <Heading />

        <section className="mt-10 w-full max-w-md">
          <FormComponent />
        </section>
      </main>
    </>
  )
}
