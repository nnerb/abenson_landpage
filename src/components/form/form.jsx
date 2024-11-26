import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./components/input-field";
import FileInput from "./components/file-input";
import { schema } from "./schema/form-schema";
import PrimaryButton from "../buttons/primary-button";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const resumeFile = useWatch({
    control,
    name: "resume", 
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const fileName = resumeFile?.[0]?.name || "";

  return (
    <section 
      className="overflow-hidden text-primary-gray px-[1px]
      custom-sm:px-0 w-full mx-auto min-w-[300px] custom-sm:max-w-[362px]"
    >
      <div className="py-4 custom-sm:px-4 flex flex-col items-center gap-[30px] w-full">
        <div className="w-full flex flex-col items-center gap-2 custom-sm:gap-3 max-w-[280px] px-6">
          <h1 
            className="text-lg custom-sm:text-[28px] custom-sm:leading-9 
            font-poppins-semibold vertical-trim custom-sm:no-vertical-trim"
          >
            Not on the List?
          </h1>
          <p className="text-xs leading-[18px] custom-sm:text-xl custom-sm:leading-[22.8px]">
            Send us your resume
          </p>
        </div>
        
        {/* Form Starts Here */}
        <form 
          className="w-full flex flex-col gap-4" 
          onSubmit={handleSubmit(onSubmit)} 
          autoComplete="off"
        >
          <fieldset className="w-full flex flex-col gap-4">
            <legend className="sr-only">Personal Information</legend>
            {/* Name Field */}
            <InputField
              label="Name"
              name="name"
              type="text"
              register={register}
              error={errors.name}
              placeholder="John Doe"
            />

            {/* Email Field */}
            <InputField
              label="Email Address"
              name="email"
              type="text"
              register={register}
              error={errors.email}
              placeholder="johndoe@mail.com"
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="sr-only">File Upload</legend>
            {/* Resume Field */}
            <FileInput
              label="Attach Resume"
              register={register}
              error={errors.resume}
              fileName={fileName}
              placeholder="johndoe-resume.pdf"
            />
          </fieldset>

          {/* Submit Button */}
          <PrimaryButton
            type="submit"
            className="
              text-[13px] py-[13.5px] leading-[14.82px]
              text-center font-poppins-medium
              custom-sm:font-poppins-semibold
              custom-sm:text-[15px] custom-sm:leading-[22.5px] 
              custom-sm:tracking-[-0.3px]
              lg:py-[10.75px]
            "
          >
            Submit
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Form;
