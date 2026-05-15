package core

type IpDataError struct {
	IsIpDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpDataError(code string, msg string, ctx *Context) *IpDataError {
	return &IpDataError{
		IsIpDataError: true,
		Sdk:              "IpData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpDataError) Error() string {
	return e.Msg
}
