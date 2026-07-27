import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required(),
  budget: yup.string().required(),
  duration: yup.string().required(),
  desc: yup.string().required()
});
//add
const ClientPostProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), });

  const handleAdd = (data) => {
    console.log(data);
 
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Clients</span>
          <h2 className="dash-heading">Post a New Freelance Project</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row mb-3">
              <div className="col-12">
                <h4>Post a New Freelance Project</h4>
              </div>
            </div>

            <form onSubmit={handleSubmit(handleAdd)}>
              <div className="row g-3">
                {/* Project Title */}
                <div className="col-12">
                  <label className="form-label">Project Title</label>
                  <input
                    type="text"
                    className={`form-control ${errors.title ? "is-invalid" : ""
                      }`}
                    placeholder="e.g. Develop React E-commerce Web App"
                    {...register("title")}
                  />
                  <div className="invalid-feedback">
                    {errors.title?.message}
                  </div>
                </div>

                {/* Budget */}
                <div className="col-12 col-sm-6">
                  <label className="form-label">Budget (₹)</label>
                  <input
                    type="text"
                    className={`form-control ${errors.budget ? "is-invalid" : ""
                      }`}
                    placeholder="e.g. 50000"
                    {...register("budget")}
                  />
                  <div className="invalid-feedback">
                    {errors.budget?.message}
                  </div>
                </div>

                {/* Timeline */}
                <div className="col-12 col-sm-6">
                  <label className="form-label">Timeline / Deadline</label>
                  <input
                    type="text"
                    className={`form-control ${errors.duration ? "is-invalid" : ""
                      }`}
                    placeholder="e.g. 3 weeks"
                    {...register("duration")}
                  />
                  <div className="invalid-feedback">
                    {errors.duration?.message}
                  </div>
                </div>

                {/* Description */}
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    rows={6}
                    className={`form-control ${errors.desc ? "is-invalid" : ""
                      }`}
                    placeholder="Describe the project scope, deliverables, skills needed..."
                    {...register("desc")}
                  />
                  <div className="invalid-feedback">
                    {errors.desc?.message}
                  </div>
                </div>

                {/* Submit */}
                <div className="col-12">
                  <button type="submit" className="btn btn-orange">
                    Publish Project
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPostProject;