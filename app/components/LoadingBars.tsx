

interface LoadingBarsProps {
	className?: string;
}

export const LoadingBars = ({className}: LoadingBarsProps) => {
	return (
		<>
			<div className={`flex items-center justify-center ${className}`}>
				<span className="loading loading-bars loading-md"></span>
			</div>
		</>
	)
}