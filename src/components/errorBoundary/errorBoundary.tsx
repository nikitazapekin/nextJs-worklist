import React from 'react';
import type { ReactNode } from 'react';
interface ErrorState {
	error: boolean;
}

export interface ErrorBoundaryProps {
	children: ReactNode;
}
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			error: false,
		};
	}

	static getDerivedStateFromError(): ErrorState {
		return { error: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error);
		console.log(errorInfo.componentStack);
	}

	render(): ReactNode {
		if (this.state.error) {
			return (
				 
					<h1>Произошла ошибка</h1>
			 
			);
		}

		return this.props.children;
	}
}