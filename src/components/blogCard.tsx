import { useState, useEffect } from "react";
import { FaImage, FaSpinner, FaUsers, FaExternalLinkAlt } from "react-icons/fa";
import { useReadContract } from "wagmi";
import { marketPlaceContract } from "../contracts/marketPlace";

// Define Asset interface
interface Asset {
  postId?: string | number;
  postTitle?: string;
  description?: string;
  thumbnailCid?: string;
  author?: string;
  publishedAt?: string;
}

interface HomeCardProps {
  asset: Asset;
}

export const BlogCard = ({ asset }: HomeCardProps) => {
  const [thumbnailImage, setThumbnailImage] = useState<string>("");
  const [isLoadingThumbnail, setIsLoadingThumbnail] = useState(false);
  const [thumbnailError, setThumbnailError] = useState<string | null>(null);

  // Fetch total supply for collected count
  const { data: totalSupply } = useReadContract({
    address: marketPlaceContract.address as `0x${string}`,
    abi: marketPlaceContract.abi,
    functionName: "totalSupply",
    args: asset.postId ? [BigInt(asset.postId)] : undefined,
    query: {
      enabled: !!asset.postId,
    },
  });

  // Safety check for asset
  if (!asset) {
    console.error('HomeCard: asset prop is undefined');
    return null;
  }

  // Fetch thumbnail image when component mounts
  useEffect(() => {
    const fetchThumbnail = async () => {
      if (asset.thumbnailCid && !thumbnailImage) {
        setIsLoadingThumbnail(true);
        setThumbnailError(null);
        
        try {
          // Use the Vite gateway URL to fetch the thumbnail with Pinata image optimization
          // Thumbnail size: 192px height × 384px width (max-w-sm card)
          const gatewayUrl = import.meta.env.VITE_GATEWAY_URL || 'gateway.pinata.cloud';
          const thumbnailUrl = `https://${gatewayUrl}/ipfs/${asset.thumbnailCid}?img-width=384&img-height=192&img-fit=cover&img-format=webp&img-quality=85`;
          
          // Test if the image loads
          const img = new Image();
          img.onload = () => {
            setThumbnailImage(thumbnailUrl);
            setIsLoadingThumbnail(false);
          };
          img.onerror = () => {
            setThumbnailError('Failed to load thumbnail');
            setIsLoadingThumbnail(false);
          };
          img.src = thumbnailUrl;
        } catch (error) {
          console.error('Failed to load thumbnail:', error);
          setThumbnailError('Failed to load thumbnail');
          setIsLoadingThumbnail(false);
        }
      }
    };

    fetchThumbnail();
  }, [asset.thumbnailCid, thumbnailImage]);

  // Use asset data from contract
  const postTitle = asset.postTitle || 'Untitled';
  const postDescription = asset.description || '';
  
  const collectedCount = totalSupply ? Number(totalSupply) : 0;

  const handleReadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (asset.postId) {
      window.open(`https://inkdao.tech/app/post/${Number(asset.postId)}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="group relative w-full h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden flex items-center justify-center">
        {/* Subtle animated blob in thumbnail */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" />
        
        {isLoadingThumbnail ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative z-10">
            <FaSpinner className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        ) : thumbnailError || !asset.thumbnailCid ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative z-10">
            <FaImage className="h-16 w-16 text-gray-600" />
          </div>
        ) : thumbnailImage ? (
          <img 
            src={thumbnailImage} 
            alt={postTitle}
            className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover relative z-10"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative z-10">
            <FaImage className="h-16 w-16 text-gray-600" />
          </div>
        )}
      </div>

      {/* Content Section - Dark Background */}
      <div className="p-6 bg-transparent">
        {/* Title */}
        <h3 className="font-bold text-xl leading-tight text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
          {postTitle}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
          {postDescription}
        </p>

        {/* Bottom Section: Collected Count and Read Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
          {/* Collected Count */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaUsers className="h-4 w-4" />
            <span className="font-medium">{collectedCount} Collected</span>
          </div>

          {/* Read Button */}
          <button
            onClick={handleReadClick}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-300/50 dark:border-cyan-700 text-cyan-400 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-cyan-500/20"
          >
            <FaExternalLinkAlt className="h-3 w-3" />
            <span>Read</span>
          </button>
        </div>
      </div>
    </div>
  );
};
