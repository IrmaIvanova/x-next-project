import { BackButton } from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";

export default async function CustomersFromPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { customerId } = await searchParams
        // Edit custoner form
        if (customerId) {
            const customer = await getCustomers(parseInt(customerId))

            if (!customer) {
                return (
                    <>
                        <h2>
                            Customer ID #{customerId} not found
                        </h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            console.log(customer)
            // put customer form component
        } else {
            // new customer form component
        }

    } catch (e) {
        if (e instanceof Error) {
            throw e
        }
    }
}