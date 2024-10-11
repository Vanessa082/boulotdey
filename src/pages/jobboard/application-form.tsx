import { useForm } from 'react-hook-form';

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg ">
      <h2 className="text-xl font-semibold mb-4">Apply for this Job</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Upload CV *</label>
        <input
          {...register('cv', { required: true })}
          type="file"
          accept=".pdf, .doc, .docx"
          className="file-input file-input-bordered w-full"
        />
        {errors.cv && <span className="text-red-500">Please upload your CV</span>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Cover Letter (Optional)</label>
        <textarea
          {...register('coverLetter')}
          placeholder="Write your cover letter here (optional)"
          className="textarea textarea-bordered w-full"
        />
      </div>

      <div className="mb-4">
        <input type='checkbox' {...register('consent', { required: true })} className="checkbox checkbox-primary" />
        <span className="ml-2">I agree to the terms and conditions *</span>
        {errors.consent && <span className="text-red-500">You must agree to the terms and conditions</span>}
      </div>

      <button type="submit" className="btn btn-primary w-full">Submit Application</button>
    </form>
  );
};

