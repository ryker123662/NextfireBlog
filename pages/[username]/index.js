import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";

export async function getServerSideProps({ query }) {
	const { username } = query;

	const userDoc = await getUserWithUsername(username);

	// if no user, short circuit to 404 page
	if (!userDoc) {
		return {
			notFound: true,
		};
	}

	// JSON serializable data
	let user = null;
	let posts = null;

	if (userDoc) {
		user = userDoc.data();
		const postQuery = userDoc.ref
			.collection("posts")
			.where("published", "==", true)
			.orderBy("createdAt", "desc")
			.limit(5);

		posts = (await postQuery.get()).docs.map(postToJSON);
	}

	return {
		props: { user, posts }, // will be passed to the page component as props
	};
}

export default function Page({ user, posts }) {
	return (
		<main>
			<UserProfile user={user} />
			<PostFeed posts={posts} />
		</main>
	);
}
