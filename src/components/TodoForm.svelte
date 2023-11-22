<script>
  import { onMount } from "svelte";

  let todo = "";

  const handleSubmit = async () => {
    try {
      console.log("Submitting task:", todo);

      const response = await fetch("http://localhost:5000/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: todo }),
      });

      console.log("Server response:", response);

      if (response.ok) {
        console.log("Task added successfully");
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  onMount(() => {
    // You can use onMount to perform actions when the component is mounted.
  });
</script>

<style>
  /* Dark Theme Styles */
  :global(body) {
    background-color: #1a202c; /* Dark background color */
    color: #cbd5e0; /* Light text color */
  }


  label {
    color: #a0aec0; /* Label text color */
  }

  input {
    background-color: #4a5568; /* Dark input background color */
    color: #cbd5e0; /* Light text color */
    border: 1px solid #2d3748; /* Border color */
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
  }

  button {
    background-color: #2d3748; /* Dark button background color */
    color: #cbd5e0; /* Light text color */
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #4a5568; /* Dark button background color on hover */
  }
</style>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col text-sm mb-2">
    <label class=" font-bold mb-2 text-gray-800" for="todo">Task</label>
    <input
      class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
      type="text"
      bind:value={todo}
      name="todo"
      placeholder="Add a task"
    />
  </div>
  <button
    type="submit"
    class="w-full shadow-sm rounded bg-gray-500 hover:bg-gray-600 text-white py-2 px-4"
    >Add</button
  >
</form>


