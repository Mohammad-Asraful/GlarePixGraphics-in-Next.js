import { Card } from "flowbite-react";

const HomeClientsSlider = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-transparent">
          <Card className="w-2/3 mx-auto">
            <img
              className="w-52 h52"
              src="images/client_country_slider/client-USA.png"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeClientsSlider;
