import React, { useMemo } from "react";
import { useTheme } from 'styled-components'
import { DefaultTheme } from "../../../theme/themes";
//Icons img
import Calendar from '../../../assets/images/svg/Calendar'
import Clock from '../../../assets/images/svg/Clock'
import DownArrow from '../../../assets/images/svg/DownArrow'
import Email from '../../../assets/images/svg/Email'
import Location from '../../../assets/images/svg/Location'
import RightArrow from '../../../assets/images/svg/RightArrow'


const Components = {
  Calendar,
  Clock,
  DownArrow,
  Email,
  Location,
  RightArrow,
}

const Icons = props => {
  const theme = useTheme() || DefaultTheme;
  const {
    iconName,
    color = theme.colors.black,
    size = theme.dimensions.icon.m,
  } = props
  
  const Component = useMemo(() => {
    return Components[iconName]
  }, [iconName])

  return <Component width={size} height={size} color={color} />
}

export default Icons;