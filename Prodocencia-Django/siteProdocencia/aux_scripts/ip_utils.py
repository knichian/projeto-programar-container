import socket
import requests

__all__ = ['get_allowed_hosts', 'format_csrf_trusted_origins']

ip_services = [
    'https://api.ipify.org?format=json',
    'http://whatismyip.akamai.com/',
    'https://ipinfo.io/json',
]

def get_local_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            ip_address = s.getsockname()[0]
        return ip_address
    except socket.error as e:
        print(f"Erro ao obter o IP: {e}")
        return None

def get_public_ip(urls):
    ips = set()
    for url in urls:
        try:
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                if 'json' in response.headers.get('Content-Type'):
                    ips.add(response.json()['ip'])
                else:
                    ips.add(response.text.strip())
        except requests.RequestException as e:
            print(f"Erro ao acessar {url}: {e}")

    return ips

def get_allowed_hosts(settings_path):
    default_hosts = ['localhost', '127.0.0.1']

    local_ip = get_local_ip()
    if local_ip:
        default_hosts.append(local_ip)
        
    public_ips = get_public_ip(ip_services)

    allowed_hosts = []
    with open(settings_path, 'r') as file:
        for line in file:
            if line.startswith('ALLOWED_HOSTS'):
                allowed_hosts = eval(line.split('=')[1])
                break
            
    allowed_hosts_list = list(set(default_hosts + list(public_ips)) - set(allowed_hosts))

    return allowed_hosts_list

def format_csrf_trusted_origins(hosts, scheme='http://'):
    """
    Adiciona o esquema HTTP ou HTTPS aos hosts.
    
    Args:
        hosts (list): Lista de hosts sem o esquema.
        scheme (str): O esquema a ser adicionado (default: 'http://').
    
    Returns:
        list: Lista de hosts com o esquema adicionado.
    """
    return [f"{scheme}{host}" for host in hosts]


if __name__ == "__main__":
    path = '/root/Prodocencia-Django/siteProdocencia/settings.py'

    ip_local = get_local_ip()
    ip_publico = get_public_ip(ip_services)
    allowed_hosts = get_allowed_hosts(path)
    print(f"IP da máquina na rede: {ip_local}")
    print(f"IP na web: {ip_publico}")
    print(f"Allowed Hosts: {allowed_hosts}")
    