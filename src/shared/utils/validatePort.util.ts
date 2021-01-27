export default function checkApplicationPort(
  application: string,
  port: number,
  defaultPort: number,
): number {
  const date = new Date().toLocaleDateString();

  if (!Number.isInteger(port) || port < 0) {
    console.warn(
      `[WARNING] ${application} ${date} Invalid port setting, using default`,
      defaultPort,
    );

    return defaultPort;
  }

  return port;
}
