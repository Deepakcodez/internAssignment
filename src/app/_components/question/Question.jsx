import { QuestionLeft } from "./QuestionLeft"
import { QuestionRight } from "./QuestionRight"

export const Question = () => {
  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="md:col-span-6 col-span-12  px-5 md:px-0">
           
          <QuestionLeft/>
        </div>

        <div className="md:col-span-6 col-span-12  px-5 md:px-0">

            <QuestionRight/>
        </div>
      </div>
    </>
  )
}