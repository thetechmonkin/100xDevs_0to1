// Debouncing -> Debouncing ensures that a function is only called after a specified period of
// inactivity (i.e., after the event has stopped firing for a certain amount of time).
// If the event is triggered again before the timer ends, the timer is reset.
// This is particularly useful when you want to execute a function only
// after a user has stopped performing an action (e.g., typing in a search box).

// Throttling -> Throttling ensures that a function is called at most once in a specified time period,
// no matter how often the event is triggered. It executes the function immediately when the event is
// first triggered and then ensures that it only runs once per specified interval.
// This is useful when you want to limit how frequently a function is called while an event is
// happening continuously.

const element = document.getElementById("finalSum");
let timeout;
function debouncedPopulateDiv(){
    // Delay the call to populateDiv until I have not called for 100ms and I have been called atleast once
    clearTimeout(timeout);
    timeout = setTimeout(() => populateSum(), 200)

}

function populateSum() {
  const a = document.getElementById("first").value;
  const b = document.querySelector("#second").value;
  // const sum = parseInt(a) + parseInt(b);
  // element.innerHTML = "The sum of first and second number is " + sum;

  fetch(`http://localhost:3000/sum?a=${a}&b=${b}`)
    .then((res) => res.text())
    .then((res) => {
      element.innerHTML =
        "The sum of first and second number from the server is " + res;
    });
}
