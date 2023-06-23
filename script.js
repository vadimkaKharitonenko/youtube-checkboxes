window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("mouseup", (e) => {
    if (!e.target.closest('.checkbox')) return;
    const checkbox = e.target.closest('.checkbox');

    const isDisabled = checkbox.classList.contains('disabled');
    if (isDisabled) return e.preventDefault();

    const isIndeterminate = checkbox.classList.contains('state_indeterminate');
    if (isIndeterminate) {
      checkbox.classList.remove('state_indeterminate');
      return;
    } 

    const isChecked = checkbox.classList.contains('state_checked');

    if (isChecked) {
      checkbox.classList.remove('state_checked');
    } else {
      checkbox.classList.add('state_checked');
    }
  });
});