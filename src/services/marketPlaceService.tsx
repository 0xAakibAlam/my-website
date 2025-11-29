import { marketPlaceContract } from "../contracts/marketPlace";
import { useReadContract } from "wagmi";

export const usePostInfoByTokenAddress = (tokenId: string) => {
    const { data: postInfo, isLoading, isError, error } = useReadContract({
      address: marketPlaceContract.address as `0x${string}`,
      abi: marketPlaceContract.abi,
      functionName: 'getPostInfo',
      args: [BigInt(tokenId)],
    });
    
    // Log errors for debugging
    if (error) {
      console.error(`Error fetching post info for tokenId ${tokenId}:`, error);
    }
    
    // Log when data is null/undefined to help debug
    if (!isLoading && !isError && !postInfo) {
      console.warn(`Post info is null for tokenId ${tokenId}. This might mean the post doesn't exist in the contract.`);
      console.log(`Contract address: ${marketPlaceContract.address}`);
    }
    
    return { postInfo, isLoading, isError, error };
};

// Helper hook to get all posts from the contract
export const useAllPosts = () => {
    const { data: allPosts, isLoading, isError, error } = useReadContract({
      address: marketPlaceContract.address as `0x${string}`,
      abi: marketPlaceContract.abi,
      functionName: 'getAllPosts',
    });
    
    if (error) {
      console.error('Error fetching all posts:', error);
    }
    
    return { allPosts, isLoading, isError, error };
};