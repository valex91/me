import Link from "next/link";
import TwitterantHeader from "../TwitterantHeader";

export default function Twitterant() {
  return (
    <>
      <TwitterantHeader />
      <p className="mb-4">
        A Twitter bot built in Typescript and AWS CDK that leverages Step
        functions to automate giveaway participation.
      </p>
      <p className="mb-4">
        This particulare project was featured in{" "}
        <Link
          className="underline cursor-pointer"
          href="https://medium.com/dunelm-tech/aws-
        step-functions-show-me-the-money-cd4a34e164e9"
        >
          Dunelm Tech blog.
        </Link>
      </p>
      <p className="mb-4">
        The code for this project at the moment is public as I'm no longer
        maintaining it due to the changes to the api that happened when Twitter
        turned into X ( greedy monetisation ) and can be found on my{" "}
        <Link
          class="underline cursor-pointer"
          href="https://github.com/valex91/twitterant"
        >
          Github page{" "}
        </Link>
      </p>
    </>
  );
}
