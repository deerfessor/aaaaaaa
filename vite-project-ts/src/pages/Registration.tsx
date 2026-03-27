import { Button } from "../components/Button";


export const Registration = () => {
    function savename(formData: { get: (arg0: string) => any; }) {
        const username = formData.get("username");
        alert(`${username} - это вы`)
    }
  return (
    <div className="flex justify-between flex-wrap">
      <form action={savename}>
        <input type="text" name="username" className="bg-black border-1"/>
        <button type='submit'>Save my name</button>
    </form>
        <Button
        color="primary"
        size="small"
        title="Увеличить счётчик" onClick={function (): void {
          throw new Error("Function not implemented.");
        } } disabled={false}        ></Button>

    </div>
    
  )
}
