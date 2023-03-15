# RTK Query JSON Placeholder Project

I built this project to learn about RTK Query which comes as a added feature in Redux Toolkit.

RTK Query helps us fetch data efficiently without writing a lot of handwritten code using asyncThunk and writing extra reducers manually.

RTK Query provides reusable hooks that help fetch the data, loading state, error , success states from the hook.

Following is an example of how a fetch hook looks like:
Below we are taking the post id from the search params and sending it to RTKQ Fetch Hook, which returns data, isLoading, isSuccess, isError and error information, which can be destructured.

```javascript
import { useGetPostQuery } from "@/features/api/apiSlice";

const router = useRouter();
const { id } = router.query;

const {
  data: post,
  isLoading: isPostLoading,
  isSuccess: isPostSuccess,
  isError: isPostError,
  error: postError,
} = useGetPostQuery(id);

// Handling Loading and Error State

if (isPostLoading) {
  return <h2>Loading...</h2>;
} else if (isPostError) {
  return <h2>An error occured : {postError.message}</h2>;
}
```

Internally RTK Query creates a **_cache key_** for each unique endpoint + arguements combination and stores the data for each cache key separately.

This is extremely useful because when we call the same endpoint with same arguements in a differnt component, the cache key will match for the request and data will be sent to that component from data stored for that cache key, this prevents calling the same api again.
