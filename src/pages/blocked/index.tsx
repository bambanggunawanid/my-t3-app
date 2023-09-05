import Link from "next/link";
import Button from "y/components/ui/Button";

export default function Bloked() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 ">
                <div className="container mx-auto flex min-h-screen items-center px-6 py-12">
                    <div>
                        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                            429 error
                        </p>
                        <h1 className="text-2xl md:text-3xl mt-3 font-semibold text-gray-800 dark:text-white">
                            Too many requests. Try again later.
                        </h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Sorry, too many requests. Try again later.
                        </p>

                        <div className="mt-6 flex items-center gap-x-3">
                            <Link href="/">
                                <Button label="Take me home"></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
