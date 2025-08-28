import { BackButton } from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";
import { getTicket } from "@/lib/queries/getTicket";

export default async function CustomersFromPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { customerId, ticketId } = await searchParams
        // Edit customer form



        if (!customerId && !ticketId) {
            return (
                <>
                    <h2>
                        Customer ID  and Ticket ID are
                        required to load ticket form
                    </h2>
                    <BackButton title="Go Back" variant="default" />
                </>
            )
        }
        // New ticket form
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
            if (!customer.active) {
                return <>
                    <h2>
                        Customer ID #{customerId} not active
                    </h2>
                    <BackButton title="Go Back" variant="default" />
                </>
            }
            // return ticket form
            console.log("customer: ", customer)
        }
        if (ticketId) {
            const ticket = await getTicket(parseInt(ticketId))
            if (!ticket) {
                return (
                    <>
                        <h2>
                            Ticket ID #{ticketId} not found
                        </h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            const customer = await getCustomers(ticket.customerId)
            //  return tiket form
            console.log("customer: ", customer)
            console.log("ticket: ", ticket)

        }

    } catch (e) {
        if (e instanceof Error) {
            throw e
        }
    }
}
