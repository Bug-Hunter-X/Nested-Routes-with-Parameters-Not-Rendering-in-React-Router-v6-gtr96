# React Router v6 Nested Route Bug

This repository demonstrates a bug encountered when using nested routes with parameters in React Router v6.  The issue involves the incorrect rendering of a component when navigating to a route that includes a parameter (e.g., `/users/123`).

## Bug Description

The `User` component, intended to display user details, fails to render when the route `/users/:id` is accessed.  The other routes (/ and /about) work as expected.

## Solution

The solution involves restructuring the routes to correctly handle the nested route and parameter.