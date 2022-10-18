
const Read = ({conjugations, pronouns}) => {
  return (
    <>
      <p className="comment">Lee y recuerda conjugaciones</p>
      {conjugations.map((item, index) => {

        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return (
            <div key={index}>
              <h2><span>{pronouns[index][0]}</span>  <span>{answer[1]}</span></h2>
              <p><span>{pronouns[index][1]}</span>  <span>{answer[0]}</span></p>
            </div>
          )
        })
      })}
    </>
  )
}

export default Read