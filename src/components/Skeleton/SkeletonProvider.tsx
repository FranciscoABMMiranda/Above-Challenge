import React, { createContext, PropsWithChildren, useContext } from 'react'

interface SkeletonProviderProps {
  isLoading: boolean
}

interface SkeletonWrapperProps {
  component: React.ReactElement
}

const SkeletonContext = createContext(false)

export const SkeletonWrapper: React.FC<
  PropsWithChildren<SkeletonWrapperProps>
> = ({ children, component }) => {
  const isLoading = useContext(SkeletonContext)

  if (isLoading) return component

  return children
}

export const SkeletonProvider: React.FC<
  PropsWithChildren<SkeletonProviderProps>
> = ({ isLoading, children }) => {
  return (
    <SkeletonContext.Provider value={isLoading}>
      {children}
    </SkeletonContext.Provider>
  )
}
