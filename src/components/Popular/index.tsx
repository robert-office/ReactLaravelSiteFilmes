import { Card } from "components/Card";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import { getPopularMoviesController } from "backend/controllers/getPopularMoviesController";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";

export const MoviePopular = () => {
  const [cards, setCards] = useState<ApiExternalResponse>({
    results: [],
    page: 1,
    total_pages: 10,
    total_results: 500
  });

  const envolviment = {
    SectionTitle: "Popular",
    SectionSubTitle: "Filmes",
    ButtonAllHref: "/populares",
  };

  useEffect(() => {
    const controller = new getPopularMoviesController();
    controller.handle().then(( response ) => {
      setCards( response.data );
    });
  }, []);

  return (
    <>
      {/* Section */}
      <section className="bg-white dark:bg-gray-800">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          {/* Label */}
          <Label envolviment={envolviment} />

          {/* Local Cards */}
            <LocalSwipper>
            {cards.results.map((card) => {
                return (
                  <SwiperSlide key={`popular_${String(Math.random() * 1000)}`}>
                    <Card card={card} />
                  </SwiperSlide>
                );
              })}
            </LocalSwipper>
        </div>
      </section>
    </>
  );
};
