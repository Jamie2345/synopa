export default function FAQs() {
  return (
    <div className="flex flex-col justify-center w-full items-center p-20">
      <h1 className="font-bold text-4xl sm:text-5xl mb-5">
        Frequently asked <span className="text-primary">questions</span>
      </h1>
      <div className="m-10 max-w-[1200px] w-full">
        <div className="collapse collapse-plus bg-base-100 border-b-[1px] border-secondary-content border-opacity-30 p-4 rounded-none">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-bold">
            Why do I need Synopa?
          </div>
          <div className="collapse-content">
            <p>
              Synopa helps you summarize YouTube videos quickly and efficiently. It allows you to focus on the most important content, saving you time and enabling you to grasp complex information effortlessly.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border-b-[1px] border-secondary-content border-opacity-30 p-4 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            How long does it take to summarize a video?
          </div>
          <div className="collapse-content">
            <p>
              With Synopa, you can get a concise summary of any YouTube video in seconds, allowing you to spend less time watching and more time learning.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border-b-[1px] border-secondary-content border-opacity-30 p-4 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            What types of videos can benefit from Synopa?
          </div>
          <div className="collapse-content">
            <p>
              Synopa is beneficial for all types of educational and informational videos on YouTube, whether they are tutorials, lectures, or discussion panels, making it a valuable tool for students and professionals alike.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border-b-[1px] border-secondary-content border-opacity-30 p-4 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            Can Synopa help me take notes efficiently?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! Synopa allows you to generate AI-assisted notes while you watch, so you can seamlessly capture the essential points without the hassle of manual note-taking.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border-b-[1px] border-secondary-content border-opacity-30 p-4 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            How much does Synopa cost?
          </div>
          <div className="collapse-content">
            <p>
            Synopa offers a free plan with limited features, as well as a premium subscription at just $8 per month for full access to our summarization and note-taking capabilities.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border-b-[1px] border-secondary-content border-opacity-30 p-4 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold">
            Is there a free trial or demo available?
          </div>
          <div className="collapse-content">
            <p>
              Yes! We offer a 14-day free trial for new users. Experience all of Synopa's amazing premium features and see how it can enhance your video learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
