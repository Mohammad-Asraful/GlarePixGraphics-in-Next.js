import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "flowbite-react";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup
      .number()
      .positive()
      .integer()
      .required("Enter a valid phone number"),
    country: yup.string().required(),
  })
  .required();

const ContactForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section className="py-20 px-0 lg:px-5">
      <div className="container mx-auto">
        <h2 className="uppercase text-xl font-bold text-center underline underline-offset-8 text-green-600 mb-10">
          Contact us
        </h2>
        <div className="lg:flex lg:gap-10">
          {/* form start */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <h3 className="capitalize text-[1.75rem] text-[#b06ab3]">
                we would like to hear from you
              </h3>
              <hr />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-3 mt-5 mb-3">
                <div className="w-1/2">
                  <input
                    className="p-2 border border-black rounded w-full"
                    placeholder="Enter your full name"
                    {...register("name")}
                  />
                  <p className=" text-red-600 font-medium">
                    {errors.name?.message}
                  </p>
                </div>
                <div className="w-1/2">
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
              <div>
                <div className="w-full mb-3">
                  <input
                    type="number"
                    className="p-2 border border-black rounded w-full"
                    placeholder="Enter your phone number"
                    {...register("phone")}
                  />
                  <p className=" text-red-600 font-medium">
                    {errors.number?.message}
                  </p>
                </div>
                {/*  */}
                <div className="w-full mb-3">
                  <input
                    className="p-2 border border-black rounded w-full"
                    placeholder="Enter your country name"
                    {...register("country")}
                  />
                  <p className=" text-red-600 font-medium">
                    {errors.email?.message}
                  </p>
                </div>
                {/*  */}
                <div className="w-full mb-3">
                  <textarea
                    className="w-full resize-none"
                    placeholder="Type your message here"
                    name="message"
                    rows="5"></textarea>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <Button
                  type="submit"
                  className="bg-blue-500 py-1 px-3"
                  label="2">
                  <p className="text-xl">Submit</p>
                </Button>
              </div>
            </form>
          </div>
          {/* form end */}

          {/* form contact details start */}
          {/* left side start */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <h3 className="capitalize text-[1.75rem] text-[#b06ab3]">
                we would like to hear from you
              </h3>
              <hr />
            </div>
            {/*  */}
            <div className="flex justify-center items-start gap-10">
              {/* left */}
              <div className="w-1/2">
                <h4 className="font-bold underline underline-offset-8 mb-5">
                  Bangladesh Contact:
                </h4>

                <div>
                  <div className="flex items-center gap-5 mb-3">
                    <img className="h-14" src="images/mobile_icon.png" alt="" />
                    <p className="text-black font-medium">+88 01819776422</p>
                  </div>
                  <div className="flex items-center gap-5 mb-3">
                    <img className="h-14" src="images/whatsapp.png" alt="" />
                    <p className="text-black font-medium">+88 01819776422</p>
                  </div>
                  <div className="flex items-center gap-5 mb-3">
                    <img
                      className="h-14"
                      src="images/web_mail_logo.png"
                      alt=""
                    />
                    <p className="text-black font-medium">
                      paul@glarepixgraphics.com
                    </p>
                  </div>
                  <div className="flex items-center gap-7 mb-3">
                    <img className="h-9" src="images/gmail.png" alt="" />
                    <p className="text-black font-medium">
                      glarepixgraphics@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-5 mb-3">
                    <img className="h-14" src="images/address.png" alt="" />
                    <p className="text-black font-medium">
                      House No: Kha, 19/D, Baparipara, Khilkhet, Dhaka 1229,
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              {/* left side end */}

              {/* right side start */}
              <div>
                <h4 className="font-bold underline underline-offset-8 mb-5 w-1/2">
                  USA Contact:
                </h4>

                <div>
                  <div className="flex items-center gap-5 mb-3">
                    <img className="h-14" src="images/man.png" alt="" />
                    <p className="text-black font-medium">Arnold Hazra</p>
                  </div>
                  <div className="flex items-center gap-5 mb-3">
                    <img className="h-14" src="images/mobile_icon.png" alt="" />
                    <p className="text-black font-medium">+1 352-2139543</p>
                  </div>
                  <div className="flex items-center gap-5 mb-3">
                    <img className="h-14" src="images/whatsapp.png" alt="" />
                    <p className="text-black font-medium">+1 352-2139543</p>
                  </div>
                  <div className="flex items-center gap-7 mb-3">
                    <img className="h-14" src="images/yahoo.png" alt="" />
                    <p className="text-black font-medium">
                      infosomething@yahoo.com
                    </p>
                  </div>
                </div>
              </div>
              {/* right side end */}
            </div>
          </div>
          {/* form contact details end */}
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
