import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        deleteProductByAdmin: builder.mutation<any, { id: string; reportId?: string } | string>({
            query: (args) => {
                const id = typeof args === "string" ? args : args.id;
                const reportId = typeof args === "string" ? undefined : args.reportId;
                return {
                    url: `/product/admin/${id}`,
                    method: "DELETE",
                    params: reportId ? { reportId } : undefined,
                };
            },
            invalidatesTags: ["Report" as any],
        }),
    }),
});

export const { useDeleteProductByAdminMutation } = productApi;
