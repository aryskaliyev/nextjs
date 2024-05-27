"use client";

import { useEffect, useCallback, useState } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        // if (success || error) return;
        
        if (!token) {
            setError("Missing token!");
            return;
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.succes);
                setError(data.error);
            })
            .catch(() => {
                setError("Something went wrong!");
            });
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader />
                )}
                <FormSuccess message={success} />
                <FormError message={error} />
            </div>
        </CardWrapper>
    );
}