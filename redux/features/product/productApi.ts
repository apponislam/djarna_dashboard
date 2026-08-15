import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        deleteProductByAdmin: builder.mutation<any, string>({
            query: (id) => ({
                url: `/product/admin/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Report" as any],
        }),
    }),
});

export const { useDeleteProductByAdminMutation } = productApi;
