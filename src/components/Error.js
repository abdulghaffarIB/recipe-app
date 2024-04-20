import errC from "../pending.svg";
export default function ErrorComponent() {
  return (
    <section className="max-w-5xl my-10 mx-auto  rounded   px-4">
      <div className="bg-white py-5 flex flex-col justify-center items-center w-full">
        <div>
          <img src={errC} alt="not working" className="w-40" />
        </div>
        <p className="text-base"> Something went wrong. </p>
      </div>
    </section>
  );
}
