export const focusNextInputOrBlur = (inputId: string) => {
  const inputArr: HTMLInputElement[] = Array.from(
    document.querySelectorAll('input:not([type="checkbox"]):not([aria-hidden="true"])')
  )

  if (inputArr.length) {
    const currentIndex = inputArr.findIndex(elem => elem.id === inputId)

    if (currentIndex + 1 >= inputArr.length) {
      inputArr[currentIndex].blur()
    } else {
      inputArr[currentIndex + 1].focus()
    }
  }
}
