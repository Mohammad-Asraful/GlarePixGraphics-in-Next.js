import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Head from "next/head";
import { Button } from "flowbite-react";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .number()
      .typeError("A phone number is required")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    country: yup.string().required(),
  })
  .required();

const TrialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Head>
        {/* <!-- Basic --> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Metas --> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Site Metas --> */}
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>GPG</title>
      </Head>

      <section className="py-20 px-3 lg:px-5 bg-[#eeeeee]">
        <div className="container mx-auto">
          <div>
            {/*  */}
            <h2 className="uppercase text-xl font-bold text-center underline underline-offset-8 text-green-600 mb-10">
              GPG FREE TRIAL
            </h2>
            <div className="lg:flex lg:gap-10">
              {/* form start */}
              <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-5 mb-3">
                    <div className="w-full">
                      <label className="text-lg mb-10" htmlFor="name">
                        Full Name:
                      </label>
                      <input
                        className="p-2 border border-black rounded w-full"
                        placeholder="Enter your full name"
                        {...register("name")}
                      />
                      <p className=" text-red-600 font-medium">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div className="w-full">
                      <label className="text-lg mb-10" htmlFor="name">
                        Email:
                      </label>
                      <input
                        className="p-2 border border-black rounded w-full"
                        placeholder="Enter your email address"
                        {...register("email")}
                      />
                      <p className=" text-red-600 font-medium">
                        {errors.email?.message}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-5 mb-3">
                    <div className="w-full">
                      <label className="text-lg mb-10" htmlFor="phone">
                        Phone Number:
                      </label>
                      <input
                        type="number"
                        className="p-2 border border-black rounded w-full"
                        placeholder="Enter your phone number"
                        {...register("phone")}
                      />
                      <p className="text-red-600 font-medium">
                        {errors.phone?.message}
                      </p>
                    </div>
                    <div className="w-full">
                      <label className="text-lg mb-10" htmlFor="country">
                        Country:
                      </label>
                      <input
                        className="p-2 border border-black rounded w-full"
                        placeholder="Enter your country name"
                        {...register("country")}
                      />
                      <p className=" text-red-600 font-medium">
                        {errors.country?.message}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-5 mb-3">
                    <div className="w-full">
                      <label className="text-lg mb-10" htmlFor="company name">
                        Company Name:
                      </label>
                      <input
                        type="text"
                        className="p-2 border border-black rounded w-full"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="w-full">
                      <label className="text-lg mb-10" htmlFor="website">
                        Website:
                      </label>
                      <input
                        type="text"
                        className="p-2 border border-black rounded w-full"
                        placeholder="Enter your website address"
                      />
                    </div>
                  </div>
                  {/*  */}

                  {/* select services start */}
                  <div className="text-lg">
                    <h4 className="underline underline-offset-8 mb-3 font-medium">
                      Select service:
                    </h4>

                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>Clipping Path Service</span>
                    </div>
                    {/*  */}
                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>Multi path service</span>
                    </div>
                    {/*  */}
                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>Photo Retouching Service</span>
                    </div>
                    {/*  */}
                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>
                        Jewelry Retouching (
                        <span className="text-red-600">
                          One file will be accepted for this service
                        </span>
                        )
                      </span>
                    </div>
                    {/*  */}
                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>Ghost Mannequin Service</span>
                    </div>
                    {/*  */}
                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>Shadow Creation Service</span>
                    </div>
                    {/*  */}
                    <div className="mb-3 flex items-center justify-start gap-2 font-medium">
                      <input type="checkbox" className="h-8 w-8" />
                      <span>Color Correction Service</span>
                    </div>
                    {/*  */}
                  </div>
                  {/* select services end */}

                  {/* upload image start */}
                  <div className="mb-10">
                    <p className="mt-10 mb-3 text-lg font-bold">
                      Upload Files (Upload Your Files (max 300mb/file, 5files
                      only) )
                    </p>

                    <div className="flex items-center justify-center w-full">
                      <label
                        for="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mb-2 text-2xl text-black">
                            Drag & Drop files here or click to browse
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  {/* upload image end */}

                  {/* drive link start */}
                  <div>
                    <p className="font-medium">
                      If the size of your Images is more than 300mb then share
                      your images link here from your cloud like Google Drive,
                      We transfer.
                    </p>
                    <input
                      type="text"
                      placeholder="Drive Link"
                      className="w-full p-3 mt-3 mb-6"
                    />
                  </div>
                  {/* drive link end */}

                  <div className="mb-3">
                    <p className="mb-3 font-medium">Your Job Instruction</p>
                    <textarea
                      className="resize-none w-full"
                      rows="4"></textarea>
                  </div>

                  <div className="mb-12">
                    <Button
                      type="submit"
                      className="bg-[#007bff] py-1 px-3"
                      label="2">
                      <p className="text-xl">Submit</p>
                    </Button>
                  </div>
                </form>

                <p className="text-2xl font-semibold">
                  We have 24/7 customer support. For any kind of free trial
                  problem please Go to contact us.
                </p>
              </div>
              {/* form end */}
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrialForm;
