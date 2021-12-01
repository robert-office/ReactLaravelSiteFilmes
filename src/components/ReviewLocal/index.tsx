import { getReviewsController } from "backend/controllers/getReviewsController";
import { ApiExternalResponseReviews } from "backend/services/getReviewsService";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import ReviewCard from "components/ReviewCard";
import { useEffect, useState } from "react";

type Props = {
  alldata: ApiExternalResults;
};

export const ReviewsLocal = ({ alldata }: Props) => {
  const [reviews, setReviews] = useState<ApiExternalResponseReviews>({
    results: [],
  });

  useEffect(() => {
    const controller = new getReviewsController();
    controller.handle(alldata.media_type, alldata.id).then((response) => {
      setReviews(response.data);
    });
  }, [alldata]);

  return (
    <>
      {/* Section */}
      <section className="bg-bgColor">
        <div className={`relative bg-bgColor flex flex-col mt-10 px-5 ${reviews.results.length > 1 ? "flex" : "hidden"}`}>
          <h2 className="font-extrabold leading-5 tracking-tight text-sm mb-5 text-center sm:text-left">
            Reviews
          </h2>
          <div className="overflow-scroll flex flex-row gap-2">
            {reviews.results.map((review) => {
              return <ReviewCard reviewData={review} key={`dfsf`} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
