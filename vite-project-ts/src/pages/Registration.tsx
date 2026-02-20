

export const Registration = () => {
    function savename(formData: { get: (arg0: string) => any; }) {
        const username = formData.get("username");
        alert(`${username} - это вы`)
    }
  return (
    <form action={savename}>
        <input type="text" name="username"/>
        <button type='submit'>Save my name</button>
    </form>
  )
}
