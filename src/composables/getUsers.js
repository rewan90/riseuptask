import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await 
        .collection("posts")
        //.orderBy('title', 'desc')
        .orderBy("createdAt", "desc")
        .get();

      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
