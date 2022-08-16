import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const fetchTransactions = useContextSelector(TransactionsContext, context => {
        return context.fetchTransactions;
    });

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInput) {
        await fetchTransactions(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por transações" {...register("query")} />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    );
}
