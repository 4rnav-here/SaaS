import CompanionForm from "@/components/ui/CompanionForm"
import { redirect } from "next/dist/server/api-utils";


const NewCompanion = () => {

  const {userId} = await auth();

  if(!userId) redirect('/sign-in');

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />

      </article>
    </main>
  )
}

export default NewCompanion

function auth(): { userId: any; } | PromiseLike<{ userId: any; }> {
  throw new Error("Function not implemented.");
}
